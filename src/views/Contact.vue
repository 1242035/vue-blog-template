<template>
    <div class="columns is-multiline is-centered">	  
	  <!-- posts (image length should be 400; height can be whatever) -->
	  <div class="column is-8">
	    <div class="box">
	      <div class="content-header">
		<div class="has-text-centered">
		  <img src="http://placehold.it/200x200">
		  <h4 class="title is-4 is-spaced">Contact</h4>
		  <h5 class="subtitle is-5"><i>Contact Subtitle</i></h5>

		  <!-- some short links like on above -->
		  <div class="nav-center">
		    <a class="nav-item is-tab">
		      <span class="icon">
			<i class="fa fa-facebook"></i>
		      </span>
		    </a>
		    <a class="nav-item is-tab">
		      <span class="icon">
			<i class="fa fa-twitter"></i>
		      </span>
		    </a>
		    <a class="nav-item is-tab">
		      <span class="icon">
			<i class="fa fa-instagram"></i>
		      </span>
		    </a>
		  </div>
		  <!-- end short links -->
		  
		  <hr>
		</div>
	      </div>

	      <!-- form begin -->
	      <form>
		<div class="field">
		  <label class="label">Name</label>
		  <p class="control">
		    <input class="input" type="text" placeholder="Text input">
		  </p>
		</div>

		<div class="field">
		  <label class="label">Email</label>
		  <p class="control">
		    <input class="input" type="text" placeholder="Email input" value="">
		  </p>
		</div>

		<div class="field">
		  <label class="label">Subject</label>
		  <p class="control">
		    <span class="select">
		      <select>
			<option>Select dropdown</option>
			<option>With options</option>
		      </select>
		    </span>
		  </p>
		</div>

		<div class="field">
		  <label class="label">Message</label>
		  <p class="control">
		    <textarea class="textarea" placeholder="Textarea"></textarea>
		  </p>
		</div>

		<div class="field is-grouped">
		  <p class="control">
		    <button class="button is-primary">Send</button>
		  </p>
		  <p class="control">
		    <button class="button is-link">Clear</button>
		  </p>
		</div>
	      </form>
	      <!-- form end -->
	      
	      <hr>
	      <div class="end-content-nav-wrapper">
		<div class="is-pulled-left">
		  <a href="#">
		    <i class="fa fa-angle-double-left" aria-hidden="true"> Back to Home</i>
		  </a>
		</div>
	      </div>
	    </div>
	    <!-- about content should end here --> 
	    
	  </div>
	  <!-- end of about column -->

	  <!-- sidebar with plugins/details/etc -->
	  <div class="column is-4 is-narrow">
	    <div class="card-wrapper">
	      <div class="card">
		<header class="card-header-fix-center has-text-centered">
		  <p class="card-header-title-fix">
		    About
		  </p>
		</header>
		<div class="card-content">
		  <div class="content">
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
		    <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
		  </div>
		</div>
	      </div>
	    </div>

	    <div class="card-wrapper">
	      <div class="card">
		<div class="card-image">
		  <figure class="image is-4by3">
		    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
		  </figure>
		</div>
		<div class="card-content">
		  <div class="media">
		    <div class="media-left">
		      <figure class="image is-48x48">
			<img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
		      </figure>
		    </div>
		    <div class="media-content">
		      <p class="title is-4">John Smith</p>
		      <p class="subtitle is-6">@johnsmith</p>
		    </div>
		  </div>

		  <div class="content">
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
		    <a>#css</a> <a>#responsive</a>
		    <small>11:09 PM - 1 Jan 2016</small>
		  </div>
		</div>
	      </div>
	    </div>

	    <div class="card-wrapper">
	      <div class="card">
		<header class="card-header-fix-center has-text-centered">
		  <p class="card-header-title-fix">
		    Something
		  </p>
		</header>
		<div class="card-content">
		  <div class="content">
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
		  </div>
		</div>
	      </div>	    
	    </div>
	    <!-- end of plugins/etc/ column -->
	    
	  </div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
