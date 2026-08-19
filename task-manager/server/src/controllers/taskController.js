import Task from "../models/taskModel.js";

 const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();

        res.json(tasks);
    } catch (error) {
        next(error);
    }
};

const createTask = async (req, res, next) => {
    try {
        const { title } = req.body;

        if (!title || !title.trim()) {
            throw new AppError(
                "Task title is required",
                400
            );
        }

        const task = await Task.create({
            title: title.trim(),
            user: req.user.userId
        });

        res.status(201).json(task);

    } catch (error) {
        next(error);
    }
};

const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
};


 const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        { ...req.body, user: req.user.userId },
        {
            new: true,
            runValidators: true
        }
    );

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
};

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json({
        message: "Task deleted successfully"
    });
};

export { getTasks, createTask, getTask, updateTask, deleteTask };