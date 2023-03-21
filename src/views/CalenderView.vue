<template>
    <div class="calendar">
      <div>
        <button @click="prevMonth">&lt;</button>
        <span>{{ currentMonth }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <table>
        <thead>
        <tr>
          <th v-for="day in daysOfWeek" v-bind:key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeks" v-bind:key="week">
          <td v-for="day in week" v-bind:key="day">{{ day }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    computed: {
      currentMonth() {
        return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
      },
      weeks() {
        const weeks = []
        const startDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)
        const endDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0)
        const numDays = endDate.getDate()

        let week = []
        for (let i = 0; i < startDate.getDay(); i++) {
          week.push('')
        }

        for (let i = 1; i <= numDays; i++) {
          week.push(i)
          if (week.length === 7) {
            weeks.push(week)
            week = []
          }
        }

        if (week.length > 0) {
          for (let i = week.length; i < 7; i++) {
            week.push('')
          }
          weeks.push(week)
        }

        return weeks
      }
    },
    methods: {
      prevMonth() {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1)
      },
      nextMonth() {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1)
      }
    }
  }
  </script>

  <style>
  .calendar {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .calendar button {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    padding: 4px 8px;
  }

  .calendar table {
    border-collapse: collapse;
    margin-top: 10px;
    width: 70%;
  }

  .calendar th,
  .calendar td {
    border: 1px solid #ccc;
    padding: 6px;
    text-align: center;
  }

  .calendar th {
    background-color: #eee;
  }
  </style>
