import mongoose from "mongoose";

const dbUser = "rokylobinho";
const dbPassword = "*****************";
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.aj4uf.mongodb.net/api-theanimes?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mondoDB com sucesso!");
    });
};
connect();
export default mongoose;
