<template>
  <div class="form-content">
    <h1>{{ $route.params.id ? "Update Task" : "Create Task" }}</h1>
    <form class="form" @submit.prevent="saveTask">
      <label for="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Write a title"
        required
        v-model="task.title"
      />
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="10"
        placeholder="Write a description"
        required
        v-model="task.description"
      ></textarea>
      <button
        class="btn-submit"
        type="submit"
        :disabled="!task.title || !task.description"
      >
        Save
      </button>
      <p v-if="loading">Loading....</p>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ITaskResponse, Task } from "@/interfaces/types";
import { createTask, getTask, updateTask } from "@/services/taskServices";

export type DataType = { task: Task; loading: boolean };

export default defineComponent({
  name: "TaskForm",
  data(): DataType {
    return {
      task: {
        title: "",
        description: "",
      },
      loading: false,
    };
  },
  components: {},

  //!methods that going to be executed
  methods: {
    async saveTask(/* e:Event */) {
      this.loading = true;
      if (this.$route.params.id) {
        await updateTask({
          id: this.$route.params.id as string,
          task: this.task,
        });
      } else {
        await createTask(this.task);
      }
      this.loading = false;
      this.$router.push({ name: "tasks" });
    },
    async loadTask() {
      const res = (await getTask(
        this.$route.params.id as string
      )) as ITaskResponse;
      console.log(res.task);
      this.task = res.task as Task;
    },
  },
  mounted() {
    if (this.$route.params.id) {
      console.log(this.$route.params.id);
      this.loadTask();
    }
  },
  //!Deep watcher: allows see the behavior of a object
  watch: {
    // task: {
    //   handler(newTask: Task, oldTask: Task) {
    //      console.log(newTask.title, newTask.description);
    //      console.log("oldTask-->", oldTask);
    //   },
    //   deep: true,
    // },
    // "task.title"(newValue) {
    //   console.log(newValue);
    // },
  },
});
</script>

<style>
.form-content {
  max-width: 600px;
  width: 70%;
  margin: 1rem auto;
  padding: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}
.form {
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
  color: #eee;
  background-color: #65affa;
}
.form input,
.form textarea {
  width: 80%;
  margin: 1rem auto;
  padding: 14px;
  font-size: 1rem;
  border: none;
  outline: none;
  color: #222121;
  background-color: #fff8;
}

.form textarea {
  resize: none;
  font-family: inherit;
}

.form input:focus-within,
.form textarea:focus-within {
  outline: thin solid #222121;
  box-shadow: 0 0 4px #0005;
}
.btn-submit {
  width: 50px;
  margin: auto;
  padding: 8px;
  border: none;
  color: #eee;
  font-weight: bold;
  background-color: #393838;
  cursor: pointer;
}
.btn-submit:active {
  transform: scale(0.9);
}
</style>
