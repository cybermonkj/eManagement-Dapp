<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Course</th>
          <th class="text-left">Code</th>
          <th class="text-left">Score</th>
          <th class="text-left">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in results" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.score }}</td>
          <td>{{ item.grade }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          name: this.$store.state.rt_title,
          code: this.$store.state.rt_code,
          score: this.$store.state.rt_score,
          grade: this.$store.state.rt_grade
        }
      ]
    };
  }
};
</script>