<template>
  <div flex flex-row justify-start content-center w-full>
    <div border-3 rounded-full h-max class="logo">
      <img w-24 :src="logo" />
    </div>

    <div flex flex-col place-content-center>
      <h4 text-label-primary mt-4 ml-4 my-0 py-0 flex flex-col>
        <p>1995-2000</p>
        <p>Entreprise</p>
        <p>Intitulé du poste</p>
      </h4>
      <div class="experience-bloc" mt-10 h-max ref="experienceBloc">
        <div class="experience-entry">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div class="experience-entry">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div class="experience-entry">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div class="experience-entry">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
const experienceBloc = ref(null);
const timelineHeight = computed(() => `${experienceBloc?.value?.clientHeight}px`);

</script>
<style scoped>
.logo {
  border-color: v-bind(borderColor);
  filter: invert(12%) sepia(100%) saturate(2084%) hue-rotate(351deg)
    brightness(71%) contrast(115%);
}

.experience-bloc::before {
  content: "";
  position: absolute;
  background-color: #bd2e00;
  width: 0.2em;
  height: v-bind(timelineHeight);
  margin-left: -3rem;  
}

.experience-entry::before {
  content: "";
  position: absolute;
  margin-left: -3rem;
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
