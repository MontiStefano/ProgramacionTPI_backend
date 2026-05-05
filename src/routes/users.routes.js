import { Router } from "express"

const router = Router();

router.get("/usuarios", (req, res) => {
  res.send("Obteniendo usuarios")
})

router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Obteniendo usuario ${id}`);
});

router.post("/usuarios",(req, res)=> {
  res.send("Creando usuario")
});

router.put("/usuarios/:id", (req, res) => {
  const { id } = req.params
  res.send(`Usuario ${id} actualizado con éxito`)
})

router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params
  res.send(`Usuario ${id} eliminado con éxito`)
})

export default router;