const cars = require('../models/carModel');

exports.getCars = (req, res) => {
    res.json(cars);
};

exports.bookCar = (req, res) => {
    const { id } = req.body;
    const car = cars.find(c => c.id === id);
    if (car && car.status === 'available') {
        car.status = 'booked';
        res.json({ message: 'Car booked successfully!' });
    } else {
        res.json({ message: 'Car not available or invalid ID.' });
    }
};