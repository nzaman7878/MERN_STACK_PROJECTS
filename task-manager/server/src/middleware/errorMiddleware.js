const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation failed",
            errors: Object.values(err.errors).map(
                error => error.message
            )
        });
    }

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message || "Internal server error"
    });
};

export default errorHandler;