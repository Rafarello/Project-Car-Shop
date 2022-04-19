import mongoose from 'mongoose';

// Usei como base a clearDatabase do teste da Trybe e realizei algumas mudanças

const clearCarsDatabase = async () => {
  const collections = mongoose.connection.collections;

  if('cars' in collections) {
    const carCollection = collections['cars'];
    await carCollection.deleteMany({});
  }
}

export default clearCarsDatabase;