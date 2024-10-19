<template>
  <div class="h-100">
    <p class="texts-lg font-weight-bold pl-1 borders-primary mb-5">
      個人帳戶設置
    </p>
    <v-row justify="center">
      <!-- 第一張卡片 -->
      <v-col cols="3" class="d-flex">
        <v-card
          :variant="variant"
          class="mx-auto rounded-lg flex-grow-1"
          :class="!isDarkMode ? 'card-color-bg' : 'dark-card-color-bg'"
          image="@/assets/images/cardBg.png"
        >
          <v-card-item class="px-5 pt-5 pb-7">
            <div
              class="d-flex justify-space-between align-center mb-1 flex-sm-wrap"
            >
              <div
                height="22"
                class="text-overline mb-1 btn-text-white level-bg py-1 px-2 rounded d-flex align-center btn-text-white"
              >
                <svg-icon name="Level" class="mr-1 texts-sm" />普通
              </div>
              <v-btn
                class="rounded-50 texts-primary px-8 py-3 d-flex texts-md btn-bg-white"
                variant="outlined"
                width="94"
                height="40"
              >
                訂閱
              </v-btn>
            </div>
            <div
              v-bind="props"
              class="d-flex align-center cursor-pointer texts-primary"
            >
              <v-avatar :image="avatar" size="50"></v-avatar>
              <span class="ml-2 texts-lg font-weight-bold">{{ name }}</span>
            </div>
          </v-card-item>
          <v-card-actions class="texts-primary-gray px-5 pt-0 pb-5 texts-m">
            <p>2024年09月29日過期</p>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 第二張卡片 -->
      <v-col cols="3" class="d-flex">
        <v-card
          :variant="variant"
          class="flex-grow-1 mx-auto rounded-lg asideMenu"
        >
          <v-card-item class="px-5 pt-5 pb-7">
            <div
              class="d-flex justify-space-between align-center mb-1 flex-sm-wrap"
            >
              <span class="ml-2 texts-l font-weight-bold">{{ phone }}</span>
              <div
                height="22"
                class="text-overline mb-1 btn-text-white level-bg py-1 px-2 rounded d-flex align-center btn-text-white"
              >
                <p class="texts-sm white-space-nowrap">管理員</p>
              </div>
              <v-btn
                class="rounded-50 texts-primary px-8 py-3 d-flex texts-md btn-bg-white"
                variant="outlined"
                width="94"
                height="40"
              >
                加購相機
              </v-btn>
            </div>
            <div
              v-bind="props"
              class="d-flex align-center cursor-pointer texts-primary"
            ></div>
          </v-card-item>
          <v-card-actions class="texts-primary-gray px-5 pt-0 pb-5 texts-m">
            <p>2020-10-20 創建</p>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 第三張卡片 -->
      <v-col cols="3" class="d-flex">
        <v-card
          :variant="variant"
          class="flex-grow-1 mx-auto rounded-lg asideMenu"
        >
          <v-card-item class="px-5 pt-5 pb-7">
            <div
              class="d-flex justify-space-between align-center mb-1 flex-sm-wrap"
            >
              <span class="ml-2 texts-l font-weight-bold">總容量空間</span>
              <v-btn
                class="rounded-50 texts-primary px-8 py-3 d-flex texts-md btn-bg-white"
                variant="outlined"
                width="94"
                height="40"
              >
                增加容量
              </v-btn>
            </div>
            <div
              v-bind="props"
              class="d-flex align-center cursor-pointer texts-primary"
            ></div>
          </v-card-item>
          <v-card-actions
            class="texts-primary-gray px-5 pt-0 pb-5 texts-m d-flex align-center justify-space-between"
          >
            <v-sheet class="d-flex align-center w-100" rounded="lg">
              <v-progress-linear
                rounded
                class="progress-bg-color texts-secondary-color mr-2"
                model-value="20"
                :height="8"
              ></v-progress-linear>
              <div
                class="texts-secondary-gray d-flex justify-space-between texts-md"
              >
                <p><span class="texts-secondary-color">27.95G</span>/100G</p>
              </div>
            </v-sheet>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 第四張卡片 -->
      <v-col cols="3" class="d-flex">
        <v-card
          :variant="variant"
          class="flex-grow-1 mx-auto rounded-lg asideMenu"
        >
          <v-card-item class="px-5 pt-5 pb-7">
            <div
              class="d-flex justify-space-between align-center mb-1 flex-sm-wrap"
            >
              <span class="ml-2 texts-l font-weight-bold">3D模型屋升級</span>
              <v-btn
                class="rounded-50 texts-primary px-8 py-3 d-flex texts-md btn-bg-white"
                variant="outlined"
                width="94"
                height="40"
              >
                購買點數
              </v-btn>
            </div>
            <div
              v-bind="props"
              class="d-flex align-center cursor-pointer texts-primary"
            ></div>
          </v-card-item>
          <v-card-actions class="texts-primary-gray px-5 pt-0 pb-5">
            <div class="borders-point rounded-circle px-2 py-0">
              <p class="texts-primary">P</p>
            </div>
            <p>剩餘點數：<span class="texts-primary texts-lg">5點</span></p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- 個人帳戶設置 -->
    <v-row class="h-100">
      <v-col cols="12" class="d-flex h-100">
        <v-card
          :variant="variant"
          class="flex-grow-1 mx-auto rounded-lg asideMenu mb-7"
        >
          <v-card-item class="px-5 pt-5 pb-7">
            <div
              class="d-flex justify-space-between align-center mb-1 flex-sm-wrap p-0 texts-primary"
            >
              <div class="w-50">
                <p class="texts-lg font-weight-bold pl-2 borders-primary mb-5">
                  上傳頭貼
                </p>
                <p class="texts-secondary-gray pt-0 texts-m">
                  建議尺寸: 500px * 500px ，格式 : jpg、jpeg、png
                </p>
              </div>
              <div class="w-50">
                <p class="texts-lg font-weight-bold pl-2 borders-primary mb-5">
                  基本資料
                </p>
                <v-divider class="border-opacity-25"></v-divider>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="firstname"
                          :counter="10"
                          :rules="nameRules"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="lastname"
                          :counter="10"
                          :rules="nameRules"
                          label="Last name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </div>
            <div
              v-bind="props"
              class="d-flex align-center cursor-pointer texts-primary"
            ></div>
          </v-card-item>
          <v-card-actions class="justify-center px-5 pt-0 pb-5">
            <v-btn
              class="rounded-50 btn-text-white px-8 py-3 d-flex texts-md background-primary"
              type="submit"
              width="94"
              height="40"
            >
              提交
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import avatar from "@/assets/images/avatar.jpg";
const name = "陳經理";
const phone = "0921302697";
import { inject } from "vue";
const isDarkMode = inject("isDarkMode");
</script>

<style scoped>
@import "@/styles/settings.scss";
.card-color-bg {
  background: linear-gradient(101.87deg, #bbe8ef 2.37%, #ffffff 96.2%);
}
.dark-card-color-bg {
  background: linear-gradient(101.87deg, #4a7a80 2.37%, #2c2c2c 96.2%);
}

/* 空間過多時，需要指定到v-card的下一層改變套件的CSS，所以使用v-deep */
::v-deep .v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 4px 2px 0px hsla(0, 0%, 0%, 0.05);
}
</style>
