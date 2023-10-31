<template>
    <div class="app-max-component">
      <div class="app-max-component-close">
        <a href="#" class="app-max-component-link" @click.prevent="$emit('close', null)">Закрыть</a>
      </div>
      <h1 class="app-max-component-main-title">Диагноз: <span class="app-max-component-span">{{ sym.diagnosis.toUpperCase() }}</span></h1>
      <h2 class="app-max-component-title"><span class="app-max-component-span">Симптомы:</span></h2>
      <div class="app-max-component-box" v-if="sympList">
        <p v-for="item in sym.symptoms" :key="item">{{ sympList[item].title }}</p>
      </div>
      <h2 class="app-max-component-title"><span class="app-max-component-span">{{ sym.help.about_title }}</span></h2>
      <p class="app-max-component-text">{{ sym.help.about_text }}</p>
      <h2 class="app-max-component-title"><span class="app-max-component-span">{{ sym.help.symp_title }}</span></h2>
      <p class="app-max-component-text">{{ sym.help.symp_text }}</p>
    </div>
  </template>
  
  <script>
    export default {
      name: "AppMax",
      data: () => ({
        sympList: [
      {
        "title": "Боли в груди",
        "active": false
      }, 
      {
        "title": "Температура", 
        "active": false
      }, 
      {
        "title": "Кашель",
        "active": false
      }, 
      {
        "title": "Озноб",
        "active": false
      }, 
      {
        "title": "Слабость",
        "active": false
      }, 
      {
        "title": "Недомогание",
        "active": false
      }, 
      {
        "title": "Головные боли",
        "active": false
      }, 
      {
        "title": "Ломота в теле",
        "active": false
      }, 
      {
        "title": "Утомляемость",
        "active": false
      }, 
      {
        "title": "боли в мышцах и суставах",
        "active": false
      }, 
      {
        "title": "Тошнота",
        "active": false
      }, 
      {
        "title": "Боли в животе",
        "active": false
      }, 
      {
        "title": "Сухость во рту",
        "active": false
      }, 
      {
        "title": "Обложенный язык",
        "active": false
      }, 
      {
        "title": "Отсутсвие аппетита",
        "active": false
      }, 
      {
        "title": "Боль в правой нижней части живота",
        "active": false
      }, 
      {
        "title": "Рвота",
        "active": false
      }, 
      {
        "title": "Нарушение стула",
        "active": false
      }, 
      {
        "title": "Заложенность носа",
        "active": false
      }, 
      {
        "title": "Слезотечение",
        "active": false
      }, 
      {
        "title": "Зуд",
        "active": false
      }, 
      {
        "title": "Чихание",
        "active": false
      }, 
      {
        "title": "Затруднение дыхания",
        "active": false
      }, 
      {
        "title": "Покраснение",
        "active": false
      }, 
      {
        "title": "Головокружение",
        "active": false
      }, 
      {
        "title": "Холодные руки",
        "active": false
      }, 
      {
        "title": "Холодные ноги",
        "active": false
      }, 
      {
        "title": "Учащенное сердцебиение",
        "active": false
      }, 
      {
        "title": "Одышка",
        "active": false
      }, 
      {
        "title": "Cвистящие хрипы",
        "active": false
      }, 
      {
        "title": "Хрипы",
        "active": false
      }, 
      {
        "title": "Чувство сдавленности в грудной клетке", 
        "active": false
      }, 
      {
        "title": "Насморк", 
        "active": false
      }, 
      {
        "title": "Боли в глазах", 
        "active": false
      }, 
      {
        "title": "Ринорея", 
        "active": false
      }, 
      {
        "title": "Боли в горле", 
        "active": false
      }, 
      {
        "title": "Потеря сознания", 
        "active": false
      }, 
      {
        "title": "Редкий пульс",
        "active": false
      }, 
      {
        "title": "Спутанность сознания",
        "active": false
      }, 
      {
        "title": "Боль в боку",
        "active": false
      }, 
      {
        "title": "Сухой кашель",
        "active": false
      }, 
      {
        "title": "Кашель с мокротой",
        "active": false
      }, 
      {
        "title": "Нарушение речи",
        "active": false
      }, 
      {
        "title": "Нарушение мимики",
        "active": false
      }, 
      {
        "title": "Онемение лица",
        "active": false
      }, 
      {
        "title": "Нарушение ориентации",
        "active": false
      }, 
      {
        "title": "Нарушение слуха",
        "active": false
      }, 
      {
        "title": "Нарушение зрения",
        "active": false
      }
    ],
      }),
      props: {
        sym: {
          type: Object,
          required: true,
        }
      },
    }
  </script>
  
  <style scoped>
    .app-max-component {
      color: #000;
      border-radius: 4px;
      position: fixed;
      width: 90vw;
      height: 90vh;
      overflow-y: auto;
      inset: 0;
      z-index: 5;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
    }
    .app-max-component-close {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 10px 0;
      width: 70vw;
    }
    .app-max-component-link {
      text-decoration: none;
      color: #000;
      text-align: center;
      transition: 200ms linear;
      margin-left: auto;
    }
    .app-max-component-link:hover {
      color: rgb(0, 104, 74);
      transition: 200ms linear;
    }
    .app-max-component-span {
      color: rgb(0, 104, 74);
    }
    .app-max-component-box {
      display: grid;
      font-weight: 800;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin: 0 0 20px;
      text-align: center;
    }
    .app-max-component-main-title,
    .app-max-component-title,
    .app-max-component-text {
      margin: 0 0 20px;
    }
    .app-max-component-text {
      max-width: 70vw;
      text-align: justify;
    }
    @media screen and (max-width: 1055px) {
        .app-max-component {
            width: 100vw;
            height: 100vh;
        }
    }
  </style>