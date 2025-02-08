import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
  registration_number: String,
  unique_id: String,
  name: String,
  email: String,
  mobile: String,
  location: {
    city: String,
    state: String,
    address: String,
  },
});

const Ngo = mongoose.models.NGO || mongoose.model('NGO', ngoSchema);

export default Ngo;
