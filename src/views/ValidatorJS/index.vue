<template>
  <div class="container">
    <div class="alert alert--notif">
      Here's an example form validation using ValidatorJS
    </div>
    <form @submit.prevent="resetPassword">
      <div class="input-group"
        :class="{ 'input--error': validation && validation.isInputError('email') }">
        <label for="email">Email</label>
        <input
          autofocus
          type="text"
          placeholder="Insert your email"
          id="email"
          v-model="data.email">
        <div class="input--error__message" v-if="validation">
          {{ validation.getErrors('email')[0] }}
        </div>
      </div>
      <button class="button">Reset Password</button>
    </form>
  </div>
</template>
<script src="./script.js"></script>
