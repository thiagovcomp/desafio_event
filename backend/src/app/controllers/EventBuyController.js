const request = require("request");

const reduceEvent = events =>
  events.map(item => {
    const event = {
      event: item.event,
      timestamp: item.timestamp,
      revenue: item.revenue
    };

    for (let i = 0; i < item.custom_data.length; i++) {
      event[item.custom_data[i].key] = item.custom_data[i].value;
    }

    return event;
  });


class EventBuyController {
  async store(req, res) {
    const {
      events
    } = req.body;

    request(
      "https://storage.googleapis.com/dito-questions/events.json", {
        json: true
      },
      (err, response, body) => {

        const newEvents = reduceEvent(body.events);

        const comprou = newEvents.filter(e => e.event === "comprou");
        const comprouProduto = newEvents.filter(e => e.event === "comprou-produto");

        const timeline = comprou.map(e => {
          const products = comprouProduto.filter(
            data => data.transaction_id === e.transaction_id
          );

          const item = {
            timestamp: e.timestamp,
            revenue: e.revenue,
            transaction_id: e.transaction_id,
            store_name: e.store_name
          };

          item.products = products.map(p => {
            return {
              name: p.product_name,
              price: p.product_price
            };
          });

          return item;
        });

        return res.json({
          timeline: timeline.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        });
      }
    );
  }
}

export default new EventBuyController();