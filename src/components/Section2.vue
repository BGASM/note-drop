<template>
    <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                  <div class="col-lg-6">
                        <div class="p-5">
                            <h3 class="display-6">Deterministic Notetaking</h3>
                            <p>The goal of this data-collection effort is to collect enough material to train a machine learning algorithim to parse typed notes. I envision a word-processor plugin that would be able to analyze your notes as you type them, and categorize and classify topics/facts/questions and rank their importance and relevance. It would be able to parse testable information from notes, written in any style, and generate practice questions and flashcards deterministically.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-4">
                          <RoundSlide />
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import RoundSlide from "./RoundSlide.vue";
export default {
name: "Section2",
components: {
  RoundSlide
}
}

</script>

<style scoped>

</style>