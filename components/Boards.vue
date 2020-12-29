<template>
  <v-container>
    <v-row class="wrapper">
      <v-col cols="12" md="3" sm="12">
        <v-card
          style="border-radius: 16px; box-shadow: 0px 4px 15px rgba(224, 227, 232, 0.5)"
          class="mx-auto"
          max-width="344"
          hover
        >
          <v-card-text>
            <p class="subtitle-1 text--primary font-weight-medium">
              PayFly Design
            </p>
            <p class="caption mb-2">Раздел:<span class="font-weight-medium">Дизайн</span> </p>
            <p class="caption">Дата создания:<span class="font-weight-medium">10.10.2020</span> </p>
            <v-btn
              outlined
              block
              color="#FF6F20"
              style="border-radius: 10px"
            >
              Открыть
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card
          style="border-radius: 16px; box-shadow: 0px 4px 15px rgba(224, 227, 232, 0.5)"
          class="mx-auto"
          max-width="344"
          hover
        >
          <v-card-text>
            <p class="subtitle-1 text--primary font-weight-medium">
              PayFly Marketing
            </p>
            <p class="caption mb-2">Раздел:<span class="font-weight-medium">Маркетинг</span> </p>
            <p class="caption">Дата создания:<span class="font-weight-medium">10.10.2020</span> </p>
            <v-btn
              outlined
              block
              color="#FF6F20"
              style="border-radius: 10px"
            >
              Открыть
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card
          style="border-radius: 16px; box-shadow: 0px 4px 15px rgba(224, 227, 232, 0.5)"
          class="mx-auto"
          max-width="344"
          hover
        >
          <v-card-text>
            <p class="subtitle-1 text--primary font-weight-medium">
              abquick Продажа
            </p>
            <p class="caption mb-2">Раздел:<span class="font-weight-medium">Маркетинг</span> </p>
            <p class="caption">Дата создания:<span class="font-weight-medium">10.10.2020</span> </p>
            <v-btn
              outlined
              block
              color="#FF6F20"
              style="border-radius: 10px"
            >
              Открыть
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card
          style="text-align: center; border-radius: 16px; box-shadow: 0px 4px 15px rgba(224, 227, 232, 0.5); border: 1px solid #FF6F20"
          class="mx-auto"
          min-height="172"
          max-width="344"
          hover
          @click="dialog=true"

        >
            <p class="font-weight-medium" style="color: #FF6F20; margin-top: 75px">Создать доску</p>
        </v-card>
      </v-col>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="383"
        content-class="wrapper"
      >
        <v-card>
          <v-card-title style="font-size: 18px">
            Новая доска
          </v-card-title>
          <v-card-text>
            <label style="font-size: 12px; line-height: 15px; color: #283E54">Название</label>
          <v-text-field
            placeholder="Sunrise Tour Inc"
            outlined
            dense
          ></v-text-field>
            <label style="font-size: 12px; line-height: 15px; color: #283E54">Раздел</label>
            <v-select
              :items="items"
              placeholder="Placeholder"
              outlined
              dense
            ></v-select>
            <v-btn
              dark
              block
              color="#FF6F20"
              style="border-radius: 10px"
              @click="dialog=false"
              class="mb-2"
            >
              Создать
            </v-btn>
            <v-btn
              outlined
              block
              color="#FF6F20"
              style="border-radius: 10px"
              @click="dialog=false"
            >
              Отмена
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
 export default {
   name: 'Boards',
   data () {
     return {
       dialog: false,
       items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
     }
   },
 }
</script>
