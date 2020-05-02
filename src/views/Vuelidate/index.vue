<template>
  <div class="container">
    <div class="alert alert--notif">
      Here's an example form validation using Vuelidate
    </div>
    <form @submit.prevent="resetPassword">
      <div class="input-group" :class="{ 'input--error': isInputError('email') }">
        <label for="email">Email</label>
        <input
          autofocus
          type="text"
          placeholder="Insert your email"
          id="email"
          v-model="$v.email.$model">
        <div class="input--error__message" v-if="isInputError('email', 'required')">
          Email is required
        </div>
        <div class="input--error__message" v-if="isInputError('email', 'email')">
          Invalid email format
        </div>
      </div>
      <button class="button">Reset Password</button>
    </form>
  </div>
</template>
<script src="./script.js"></script>
