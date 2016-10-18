import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e) {
      e.preventDefault();
      var artistName = this.get('artistName');
      
      $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          name: artistName,
        }
      }).then((response) => {
         this.set('artistName', null);
         var artists = this.get('model.artists');
         artists.pushObject(response.artist);
		 this.transitionToRoute('artists');
      }, function() {
			alert('This artist already exists');
      });
    }
  }
});
