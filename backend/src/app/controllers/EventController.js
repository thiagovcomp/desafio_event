import * as Yup from 'yup';

import Event from '../schemas/Event';

class EventController {
  async index(req, res) {
    const {
      page = 1
    } = req.query;
    const skip = (page - 1) * 10;
    const events = await Event.find().sort({
        createdAt: 'desc',

      })
      .skip(skip)
      .limit(10);

    return res.json(events);
  }

  async list(req, res) {
    const {
      busca
    } = req.query;
    if (busca.length <= 1)
      return res.send([]);
    console.log(new RegExp(busca + '^', 'i'));
    const events = await Event.find({
      "event": new RegExp('^' + busca)
    }, [
      "event"
    ]).sort({
      createdAt: 'desc',

    }).limit(5);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return res.json(events);
  }

  async store(req, res) {

    /* Validação dos campos a serem inseridos */
    const schema = Yup.object().shape({
      event: Yup.string().required(),
      timestamp: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails',
      });
    }

    const {
      event,
      timestamp
    } = req.body;

    //Create event
    const result = await Event.create({
      event: event,
      data: timestamp,
    });

    return res.json(result);

  }
}

export default new EventController();