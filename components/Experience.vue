<template>
  <div flex flex-col justify-start content-center mb-2 mt-10>
    <div flex flex-row v-motion-slide-visible-once-bottom>
      <div h-max class="logo-border">
        <img
          w-24
          h-24
          :src="experience.imgPath"
          :class="color.preference === 'dark' ? 'logo' : 'logo-dark'"
        />
      </div>
      <h4 titleColor mt-4 ml-4 my-0 py-0 flex flex-col>
        <p>{{ experience.year }}</p>
        <p>{{ experience.companyName }}</p>
        <p>{{ experience.positionTitle }}</p>
      </h4>
    </div>

    <div flex flex-col place-content-center>
      <div
        class="experience-bloc"
        mt-3
        h-max
        border-l-3
        borders
        ref="experienceBloc"
        v-motion-slide-visible-once-bottom
      >
        <div
          v-for="expLinePath in experience.experienceLinesPaths"
          :key="expLinePath"
          class="experience-entry"
        >
          <ContentDoc :path="expLinePath" />
        </div>
        <div mt-2>
          <u><i>Languages & Frameworks</i> :</u>
          <strong>&nbsp;&nbsp;{{ languages }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  experience: {
    type: Object as PropType<CompanyExperience>,
  },
});
const color = useColorMode();

const languages = computed(() => props.experience.technologies.join(", "));
</script>
<style scoped>

p {
  --at-apply: m-0 ml-4 py-0;
}

.logo-border {
  --at-apply: border-5 rounded-full borders;
}

.logo {
    filter: invert(100%) sepia(2%) saturate(7%) hue-rotate(37deg) brightness(103%) contrast(100%);
}

.logo-dark {
  filter: invert(12%) sepia(100%) saturate(2084%) hue-rotate(351deg)
    brightness(71%) contrast(115%);
}

.experience-bloc {
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
  --at-apply: h-0 w-0 border-l-10 border-y-6 border-y-transparent border-l-primary dark:border-l-dark-primary;
}

p {
  margin: 0rem inherit;
}
</style>
