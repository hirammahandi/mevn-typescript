<template>
  <h1>Task details</h1>
  <span v-if="loading">Loading....</span>
  <div class="card-content">
    <div class="card-info">
      <h2>{{ task.title }}</h2>
      <p>{{ task.description }}</p>
      <div class="btn-group">
        <button @click="deleteTask">Delete</button>
        <button @click="toUpdatePage">Update</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ITaskResponse, Task } from "@/interfaces/types";
import { deleteTask, getTask } from "@/services/taskServices";
import { defineComponent } from "vue";

type Data = {
  loading: boolean;
  task: Task;
};

export default defineComponent({
  name: "TaskDetails",
  data(): Data {
    return {
      loading: false,
      task: {} as Task,
    };
  },
  methods: {
    async loadTask() {
      this.loading = true;
      const res = (await getTask(
        this.$route.params.id as string
      )) as ITaskResponse;
      this.loading = false;
      this.task = res.task as Task;
    },
    async deleteTask() {
      this.loading = true;
      const res = (await deleteTask(
        this.$route.params.id as string
      )) as ITaskResponse;
      console.log(res);
      this.loading = false;
      if (!res.success) alert(res.msg);
      this.$router.push({ name: "tasks" });
    },

    toUpdatePage() {
      this.$router.push(`/tasks/update/${this.$route.params.id}`);
    },
  },
  mounted() {
    this.loadTask();
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}
.card-content {
  display: flex;
  place-content: center;
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border: thin solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 8px #000;
  background-color: #6496fa;
}

.btn-group {
  display: flex;
  place-content: center flex-end;
  gap: 5px;
}

button {
  cursor: pointer;
  padding: 4px;
  font-weight: bold;
}
</style>
