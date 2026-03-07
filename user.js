import User from "./model/User.js"

export const getUser = async (req, res) => {
    try{

        const allUser = await User.find();

        return res.json({
            allUser
        })

    } catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}

export const setUser = async (req, res) => {
    try{

        const {name, age} = req.body;
        if(!name || !age)
            return res.status(400).json({
                message: "required data not found"
            });
        
        const newUser = await User.create({
            name, age
        });

        return res.json({
            newUser
        })

    } catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}