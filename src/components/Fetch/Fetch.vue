<template>
  <div class="fetch">
  <h5 className="heading">Fetch with Axios</h5>
  <ul>
    <li v-for="value in posts.data" :key="value">
        {{value.first_name}} {{value.last_name}}
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors" :key="error.length">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';
import './Fetch.scss';

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
};
</script>
