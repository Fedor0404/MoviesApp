<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <BNavForm>
          <BFormInput
            class="mr-sm-2 search-input marker"
            placeholder="Search"
            v-model="searchValue"
            debounce="500"
          ></BFormInput>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    searchValue: '',
  }),
  watch: {
    searchValue: 'onSearchValueChanged',
  },
  methods: {
    ...mapActions('movies', [
      'searchMovies',
      'fetchMovies',
      'toggleShearchState',
    ]),
    onSearchValueChanged(val) {
      if (val) {
        this.searchMovies(val);
        this.toggleShearchState(true);
      } else {
        this.fetchMovies();
        this.toggleShearchState(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  box-shadow: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
}
.form-inline >>> ::marker {
  display: none;
}
</style>
