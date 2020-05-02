<template>
  <div class="container">
    <div class="alert alert--notif">
      Here's an example form validation using Veevalidate
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(resetPassword)">
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <div class="input-group" :class="{ 'input--error': isInputError(errors) }">
            <label for="email">Email</label>
            <input
              autofocus
              type="text"
              placeholder="Insert your email"
              id="email"
              v-model="email">
            <div class="input--error__message">
              {{ errors[0] }}
            </div>
          </div>
        </ValidationProvider>
        <button class="button">Reset Password</button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script src="./script.js"></script>
