import Ember from 'ember';

export default Ember.Component.extend({
  selectedCategory: 'all',
  actions: {
    save(params) {
      this.sendAction('save', params);
    },
    delete(post) {
      if(confirm('you sure dude?')) {
        this.sendAction('delete', post);
      }
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },

    selectCategory(category, component){
      this.set('selectedCategory', category);
      console.log(this.get('selectedCategory'));
    },

    saveComment(params) {
      this.sendAction('saveComment', params);
    },

    deleteComment(params) {
      this.sendAction('deleteComment', params);
    },

    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    }
  }
});
