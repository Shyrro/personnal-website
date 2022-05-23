<template>
  <div flex flex-col justify-start content-center mb-2>
    <div flex flex-row>
      <div border-3 rounded-full h-max class="logo">
        <img w-24 :src="logo" />
      </div>
      <h4 text-label-primary mt-4 ml-4 my-0 py-0 flex flex-col>
        <p>1995-2000</p>
        <p>Entreprise</p>
        <p>Intitulé du poste</p>
      </h4>
    </div>

    <div flex flex-col place-content-center>
      <div class="experience-bloc" mt-3 h-max ref="experienceBloc">
        <div class="experience-entry">
           <ContentDoc path="/ovh" />
        </div>
        <div class="experience-entry">
           <ContentDoc path="/ovh" />
        </div>
        <div class="experience-entry">
           <ContentDoc path="/ovh" />
        </div>
        <div class="experience-entry">
           <ContentDoc path="/ovh" />
        </div>
        <div mt-2>
          <u><i>Languages & Frameworks</i> :</u>
          <strong>&nbsp;&nbsp;Typescript, React, Vue</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  logo: {
    type: String,
    default: "",
  },
  borderColor: {
    type: String,
    default: "#36279c",
  },
});
</script>
<style scoped>
.logo {
  border-color: v-bind(borderColor);
  filter: invert(12%) sepia(100%) saturate(2084%) hue-rotate(351deg)
    brightness(71%) contrast(115%);
}

.experience-bloc {
  border-left: 0.2em solid #bd2e00;
  padding-left: 5rem;
  margin-left: 3.1rem;
}

.experience-entry {
  --at-apply: mt-2;
}

.experience-entry::before {
  content: "";
  position: absolute;
  margin-left: -5rem;
  margin-top: 0.3rem;
  height: 0;
  width: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #bd2e00;
}

p {
  margin: 0rem inherit;
}
</style>
