import { Employee } from "#root/db/models";

const setupRoutes = app => {
    app.get("/accounts", async (req,res,next) => {
        const accounts = await Employee.findAll();
        return res.json({ message: "GET worked!" });
    });
}

export default setupRoutes;