const express = require('express');
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

// // GET - Reading Data
// router.get('/', getPeople);

// // POST - Create Data
// router.post('/', createPerson);

// // POST - Create Data
// router.post('/postman', createPersonPostman);

// // PUT - Update Data
// router.put('/:id', updatePerson);

// // DELETE - Delete Data
// router.delete('/:id', deletePerson);

// Chainable Routes using Express Router
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;

// // GET - Reading Data
// router.get('/', (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// // POST - Create Data
// router.post('/', (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' });
//   }
//   res.status(201).json({ success: true, person: name });
// });

// // POST - Create Data
// router.post('/postman', (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' });
//   }
//   res.status(201).json({ success: true, data: [...people, name] });
// });

// // PUT - Update Data
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   const person = people.find((person) => person.id === Number(id));

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` });
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name;
//     }
//     return person;
//   });
//   res.status(200).json({ success: true, data: newPeople });
// });

// // DELETE - Delete Data
// router.delete('/:id', (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` });
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   );
//   return res.status(200).json({ success: true, data: newPeople });
// });

// module.exports = router;
