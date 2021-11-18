<template>
  <section id='contact' class="anchor p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 dark:bg-shade-2">
    <div class="mb-10 md:mb-0">
      <h2 class="amatic text-5xl mb-4 md:mb-10 dark:text-tint-2"> Contactez-moi </h2>

      <div class="flex flex-col">
        <div class="flex items-center mb-3">
          <a href="tel:+33661534048" class="text-3xl mr-5">
						<div id="phone-svg" class="contact-icon" />
					</a>
          <p class="dark:text-tint-2">06 61 53 40 48</p>
        </div>

        <div class="flex items-center mb-3">
          <a href="mailto:contact@quentin-sastourne.com" class="text-3xl mr-5">
						<div id="envelope-svg" class="contact-icon" />
					</a>
          <p class="dark:text-tint-2">contact@quentin-sastourne.com</p>
        </div>

        <div class="flex items-center">
          <a href="https://www.linkedin.com/in/touki/" class="mr-5">
            <div id="linkedin-svg" class="contact-icon" />
          </a>
          <p class="dark:text-tint-2">@touki</p>
        </div>
      </div>
    </div>

    <form class="flex flex-col mx-0 md:mx-auto" @submit.prevent="submit">
      <div class="flex">
        <FormInput
        :type="'text'"
        :label="'Prénom'"
        :styleClass="inputStyleClass($v.form.name.firstName)"
        :showRequiredError="showRequiredError($v.form.name.firstName)"
        :nameInError="'Le prénom'"
        v-model.trim="$v.form.name.firstName.$model"
        class="mr-5" />

        <FormInput
        :type="'text'"
        :label="'Nom'"
        :styleClass="inputStyleClass($v.form.name.lastName)"
        :showRequiredError="showRequiredError($v.form.name.lastName)"
        :nameInError="'Le nom'"
        v-model.trim="$v.form.name.lastName.$model" />
      </div>

      <FormInput
      :type="'text'"
      :label="'Adresse mail'"
      :styleClass="inputStyleClass($v.form.mailAddress)"
      :showRequiredError="showRequiredError($v.form.mailAddress)"
      :showEmailError="showEmailError($v.form.mailAddress)"
      :nameInError="'L\'adresse mail'"
      v-model.trim="$v.form.mailAddress.$model" />

      <FormInput
      :type="'text'"
      :label="'Objet'"
      :styleClass="inputStyleClass($v.form.subject)"
      :showRequiredError="showRequiredError($v.form.subject)"
      :nameInError="'L\'objet'"
      v-model.trim="$v.form.subject.$model" />

      <FormTextarea
      :label="'Message'"
      :styleClass="inputStyleClass($v.form.message)"
      :showRequiredError="showRequiredError($v.form.message)"
      :nameInError="'Le message'"
      v-model.trim="$v.form.message.$model" />

      <button id="form-btn" type="submit" class="btn-main p-5 rounded text-xl flex justify-between">
				Envoyer
				<div id="paper-plane-svg" class="btn-main-icon" />
			</button>

      <CloseableAlert
      v-show="form.submitStatus === 'PENDING'"
      :type="'warning'"
      :alert="'Envoi en cour...'"
      @close-alert="closeAlert" />

      <CloseableAlert
      v-show="form.submitStatus === 'OK'"
      :type="'success'"
      :alert="'Message envoyé ! Je vous répondrai dès que possible. A bientôt !'"
      @close-alert="closeAlert" />

      <CloseableAlert
      v-show="form.submitStatus === 'FORM_ERROR'"
      :type="'danger'"
      :alert="'Merci de remplir correctement le formulaire'"
      @close-alert="closeAlert" />

      <CloseableAlert
      v-show="form.submitStatus === 'REQUEST_ERROR'"
      :type="'danger'"
      :alert="'Oups ! Votre message semble ne pas vouloir partir. N\'hésitez pas à réessayer plus tard ou à me contacter directement par téléphone. A bientôt'"
      @close-alert="closeAlert" />
    </form>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data () {
    return {
      form: {
        name: {
          lastName: null,
          firstName: null,
        },
        mailAddress: null,
        subject: null,
        message: null,
        submitStatus: null
      }
    }
  },
  validations: {
    form: {
      name: {
        lastName: { required },
        firstName: { required },
      },
      mailAddress: { required, email },
      subject: { required },
      message: { required }
    }
  },
  methods: {
    closeAlert() {
      this.form.submitStatus = null
    },
    inputStyleClass (v) {
      if (!v.$dirty) {
        return "border-gray-300 focus:border-purple-300 focus:ring-purple-200"
      } else {
        if (v.$error) {
          return "border-red-300 focus:border-red-300 focus:ring-red-200"
        } else {
          return "border-green-300 focus:border-green-300 focus:ring-green-200"
        }
      }
    },
    showRequiredError (v) {
      if (!v.$anyDirty) {
        return false
      } else {
        return (v.required) ? false : true
      }
    },
    showEmailError (v) {
      if (!v.$anyDirty) {
        return false
      } else {
        return (v.email) ? false : true
      }
    },
    submit () {
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.form.submitStatus = 'FORM_ERROR';
      } else {
        this.form.submitStatus = 'PENDING';

        this.$mail.send({
          from: this.form.name.firstName + " " + this.form.name.lastName + "<" + this.form.mailAddress + ">",
          subject: this.form.subject,
          text: this.form.message,
          html: '<p>' + this.form.message + '</p>',
          to: 'contact@quentin-sastourne.com',
        })
        .then((response) => {
          this.form.submitStatus = response

          setTimeout(() => {
            this.form = {
              name: {
                lastName: null,
                firstName: null,
              },
              mailAddress: null,
              subject: null,
              message: null,
              submitStatus: null
            }

            this.$v.$reset()
          }, 5000)
        })
        .catch(() => {
          this.form.submitStatus = 'REQUEST_ERROR';

          setTimeout(() => {
            this.form.submitStatus = null
          }, 5000)
        });
      }
    }
  }
}
</script>

<style lang="scss">
	.contact-icon {
		background-color: $primary;
		width: 30px;
		height: 30px;
		transition-duration: 0.1s;

		&:hover {
			background-color: $tint-1;
    }
	}

	#phone-svg {
		mask: url('@/assets/images/icons/phone.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/phone.svg') no-repeat center / contain;
	}

	#envelope-svg {
		mask: url('@/assets/images/icons/envelope.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/envelope.svg') no-repeat center / contain;
	}

	#linkedin-svg {
		mask: url('@/assets/images/icons/linkedin.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/linkedin.svg') no-repeat center / contain;
	}

	#paper-plane-svg {
		mask: url('@/assets/images/icons/paper-plane.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/paper-plane.svg') no-repeat center / contain;
	}
</style>
