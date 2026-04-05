const School = require('../models/School');
const SchoolRequest = require('../models/SchoolRequest');

// Search schools by name or city (only approved schools)
const searchSchools = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.length < 2) {
      return res.json([]);
    }

    const schools = await School.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { city: { $regex: q, $options: 'i' } },
      ],
    })
      .select('_id name city')
      .limit(10);

    res.json(schools);
  } catch (error) {
    console.error('School search error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Submit new school request
const submitSchoolRequest = async (req, res) => {
  try {
    const { school_name, city, contact_name, contact_email, contact_phone } = req.body;

    // Validate input
    if (!school_name || !city || !contact_name || !contact_email || !contact_phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create school request
    const newRequest = new SchoolRequest({
      school_name,
      city,
      contact_name,
      contact_email,
      contact_phone,
      status: 'pending',
    });

    await newRequest.save();

    res.status(201).json({
      message: 'School request submitted. We will notify you once approved.',
      request_id: newRequest._id,
    });
  } catch (error) {
    console.error('School request error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get school by ID
const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id);

    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    console.error('Get school error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get all school requests (admin only)
const getAllSchoolRequests = async (req, res) => {
  try {
    const requests = await SchoolRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error('Get school requests error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Approve school request (admin only)
const approveSchoolRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const schoolRequest = await SchoolRequest.findById(id);

    if (!schoolRequest) {
      return res.status(404).json({ error: 'School request not found' });
    }

    // Create new school from request
    const newSchool = new School({
      name: schoolRequest.school_name,
      city: schoolRequest.city,
      contact_name: schoolRequest.contact_name,
      contact_email: schoolRequest.contact_email,
      contact_phone: schoolRequest.contact_phone,
    });

    await newSchool.save();

    // Update request status
    schoolRequest.status = 'approved';
    await schoolRequest.save();

    res.json({ success: true, message: 'School approved', school: newSchool });
  } catch (error) {
    console.error('Approve school error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Reject school request (admin only)
const rejectSchoolRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const schoolRequest = await SchoolRequest.findById(id);

    if (!schoolRequest) {
      return res.status(404).json({ error: 'School request not found' });
    }

    schoolRequest.status = 'rejected';
    await schoolRequest.save();

    res.json({ success: true, message: 'School request rejected' });
  } catch (error) {
    console.error('Reject school error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  searchSchools,
  submitSchoolRequest,
  getSchoolById,
  getAllSchoolRequests,
  approveSchoolRequest,
  rejectSchoolRequest,
};
