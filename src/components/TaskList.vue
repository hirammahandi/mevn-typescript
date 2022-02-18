<template lang="html">
  <h1>Task list</h1>
  <ol>
    <li v-for="task in filteredTasks" :key="task._id">
      <input
        type="checkbox"
        name="done"
        id="done"
        ref="check"
        v-model="task.done"
        :value="task._id"
        @change="updateTaskByDone(task)"
      />
      <span @click="details(task._id as string)">
        {{ task.title }} - {{ task.description }}
      </span>
    </li>
  </ol>
  <button @click="hideDone = !hideDone">
    {{ !hideDone ? "Hide" : "Show" }}
  </button>
</template>
<script lang="ts">
import { Task, ITaskResponse } from "@/interfaces/types";
import { getTasks, updateTask } from "@/services/taskServices";
import { defineComponent } from "vue";

type DataType = {
  tasks: Task[];
  loading: boolean;
  hideDone: boolean;
};

export default defineComponent({
  name: "TaskList",
  data(): DataType {
    return {
      loading: false,
      tasks: [],
      hideDone: false,
    };
  },
  computed: {
    filteredTasks(): Task[] {
      return this.hideDone ? this.tasks.filter((t) => !t.done) : this.tasks;
    },
  },
  methods: {
    async loadTasks() {
      const res: ITaskResponse = (await getTasks()) as ITaskResponse;
      this.tasks = res.tasks ?? [];
    },
    async updateTaskByDone(task: Task) {
      const res = await updateTask({ id: task._id as string, task });
      console.log(res);
    },
    details(id: string) {
      this.$router.push(`/tasks/${id}`);
    },
  },

  mounted() {
    this.loadTasks();
  },
});
</script>
<style lang="css" scoped>
ol {
  margin: 0 auto;
  padding: 0;
  width: 50%;
}

li {
  display: flex;
  place-content: center flex-start;
  padding: 1rem;
  list-style-position: inside;
  border: thin solid #000;
  background-color: #222;
}
span {
  cursor: pointer;
}
li > * {
  margin: 0 1rem 1rem 0;
}
#done:checked ~ span {
  text-decoration: line-through;
}
</style>
