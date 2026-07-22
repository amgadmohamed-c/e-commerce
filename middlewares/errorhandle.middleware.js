module.exports
             =   (err, req, res, next) => {

        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: err.message ||'Duplicate entry' });
        }
        if (err.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: err.message });
        }
        return res.status(500).json({ message:err.message ||'Internal server error' });
    }

