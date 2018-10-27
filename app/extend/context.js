'use strict';
module.exports = {
  validate(rules) {
    const params = Object.assign(this.request.query, this.request.body);
    const skema = this.app.skema.lib;
    const model = skema.shape(rules);
    try {
      this.vparams = model.from(params);
    } catch (e) {
      this.throw(422, 'Validation Failed', {
        code: 'invalid_param',
        error: `${e.key} ${e.message},input ${e.input}`,
      });
    }
  },
};
