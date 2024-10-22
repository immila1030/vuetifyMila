<template>
  <div class="h-100">
    <p class="texts-lg font-weight-bold pl-1 borders-primary mb-5">
      個人帳戶設置
    </p>
    <v-row justify="center">
      <!-- 第一張卡片 -->
      <v-col
        cols="3"
        class="d-flex"
      >
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
                <svg-icon
                  name="Level"
                  class="mr-1 texts-sm"
                />普通
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
              <v-avatar
                :image="avatar"
                size="50"
              />
              <span class="ml-2 texts-lg font-weight-bold">{{ name }}</span>
            </div>
          </v-card-item>
          <v-card-actions class="texts-primary-gray px-5 pt-0 pb-5 texts-m">
            <p>2024年09月29日過期</p>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 第二張卡片 -->
      <v-col
        cols="3"
        class="d-flex"
      >
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
                <p class="texts-sm white-space-nowrap">
                  管理員
                </p>
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
            />
          </v-card-item>
          <v-card-actions class="texts-primary-gray px-5 pt-0 pb-5 texts-m">
            <p>2020-10-20 創建</p>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 第三張卡片 -->
      <v-col
        cols="3"
        class="d-flex"
      >
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
            />
          </v-card-item>
          <v-card-actions
            class="texts-primary-gray px-5 pt-0 pb-5 texts-m d-flex align-center justify-space-between"
          >
            <v-sheet
              class="d-flex align-center w-100"
              rounded="lg"
            >
              <v-progress-linear
                rounded
                class="progress-bg-color texts-secondary-color mr-2"
                model-value="20"
                :height="8"
              />
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
      <v-col
        cols="3"
        class="d-flex"
      >
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
            />
          </v-card-item>
          <v-card-actions class="texts-primary-gray px-5 pt-0 pb-5">
            <div class="borders-point rounded-circle px-2 py-0">
              <p class="texts-primary">
                P
              </p>
            </div>
            <p>剩餘點數：<span class="texts-primary texts-lg">5點</span></p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- 個人帳戶設置 -->
    <v-row class="h-100">
      <v-col
        cols="12"
        class="d-flex h-100"
      >
        <v-card
          :variant="variant"
          class="flex-grow-1 mx-auto rounded-lg asideMenu mb-7"
        >
          <v-card-item class="px-5 pt-5 pb-7">
            <div
              class="d-flex justify-space-between mb-1 flex-sm-wrap p-0 texts-primary"
            >
              <div class="w-33">
                <p class="texts-lg font-weight-bold pl-2 borders-primary mb-5">
                  上傳頭貼
                </p>
                <p class="texts-secondary-gray pt-0 texts-m">
                  建議尺寸: 500px * 500px ，格式 : jpg、jpeg、png
                </p>
              </div>
              <div class="w-66">
                <p class="texts-lg font-weight-bold pl-2 borders-primary mb-5">
                  基本資料
                </p>
                <v-divider class="border-opacity-25" />
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <!-- 因為我們的label和input是分開的，所以這邊我把套件原有的label刪除，改自己寫label出來 -->
                      <!-- <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field> -->
                      <v-col
                        cols="12"
                        md="6"
                        class="d-flex align-center disabled"
                      >
                        <label
                          class="background w-100 h-100 label align-content-sm-center text-end justify-end px-4"
                          for="account"
                        >帳號
                        </label>
                        <div class="w-100">
                          <v-text-field
                            id="account"
                            v-model="phone"
                            disabled
                            height="20"
                            variant="outlined"
                          />
                        </div>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        class="d-flex align-center"
                      >
                        <label
                          class="background w-100 h-100 label align-content-sm-center text-end justify-end px-4"
                          for="name"
                        >名稱<span class="red-asterisk texts-error">*</span>
                        </label>
                        <div class="d-flex flex-column w-100">
                          <v-text-field
                            id="name"
                            v-model="firstname"
                            placeholder="請輸入名稱"
                            :rules="firstnameRules"
                            required
                            variant="outlined"
                            elevation="0"
                            @blur="validateFirstname"
                          />
                          <span
                            v-if="firstnameError"
                            class="texts-error error-message"
                          >{{ firstnameError }}</span>
                        </div>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        class="d-flex align-center"
                      >
                        <label
                          class="background w-100 h-100 label align-content-sm-center text-end justify-end px-4"
                          for="cellphone"
                        >聯絡電話
                        </label>
                        <div class="d-flex flex-column w-100">
                          <v-text-field
                            id="cellphone"
                            v-model="cellphone"
                            placeholder="請輸入聯絡電話"
                            :rules="cellphoneRules"
                            required
                            variant="outlined"
                            elevation="0"
                            @blur="validateCellphone"
                          />
                          <span
                            v-if="cellphoneError"
                            class="texts-error error-message"
                          >{{ cellphoneError }}</span>
                        </div>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        class="d-flex align-center"
                      >
                        <label
                          class="background w-100 h-100 label align-content-sm-center text-end justify-end px-4"
                          for="cellphone"
                        >性別
                        </label>
                        <v-radio-group inline>
                          <v-radio
                            label="男"
                            value="one"
                          />
                          <v-radio
                            label="女"
                            value="two"
                          />
                        </v-radio-group>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        class="d-flex align-center"
                      >
                        <label
                          class="background w-100 h-100 label align-content-sm-center text-end px-4"
                          for="email"
                        >電子郵件
                        </label>
                        <div class="d-flex flex-column w-100">
                          <v-text-field
                            id="email"
                            v-model="email"
                            :rules="emailRules"
                            required
                            variant="outlined"
                            @blur="validateEmail"
                          />
                          <span
                            v-if="emailError"
                            class="texts-error error-message"
                          >{{ emailError }}</span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </div>
            <div
              v-bind="props"
              class="d-flex align-center cursor-pointer texts-primary"
            />
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
import { ref } from "vue"
import avatar from "@/assets/images/avatar.jpg"
const name = "陳經理"
const phone = "0921302697"
import { inject } from "vue"
const isDarkMode = inject("isDarkMode")
const firstname = ref("")
const firstnameError = ref("")
const email = ref("")
const emailError = ref("")
const cellphone = ref("")
const cellphoneError = ref("")
// 名稱驗證
const firstnameRules = [
  (value: string) => {
    if (value) return true
    return "請填寫名稱"
  },
  (value: string) => {
    if (value?.length <= 10) return true
    return "名稱不能超過10個字元"
  },
]
// 名稱錯誤訊息
const validateFirstname = () => {
  firstnameError.value = ""
  // 驗證每一個規則，如果有一個規則成立錯誤，則返回錯誤訊息
  for (const rule of firstnameRules) {
    const result = rule(firstname.value)
    if (result !== true) {
      firstnameError.value = result
      break
    }
  }
}
// 電話驗證
const cellphoneRules = [
  (value: string) => {
    if (!value) return true // 沒有輸入時，可以通過驗證
    if (/^\d{10}$/.test(value)) return true // 簡單驗證是否為10位數手機號碼
    return "請輸入有效的手機號碼"
  },
]
// 電話錯誤訊息
const validateCellphone = () => {
  cellphoneError.value = ""
  // 驗證每一個規則，如果有一個規則成立錯誤，則返回錯誤訊息
  for (const rule of cellphoneRules) {
    const result = rule(cellphone.value)
    if (result !== true) {
      cellphoneError.value = result
      break
    }
  }
}
// 電子郵件驗證
const emailRules = [
  (value: string) => {
    if (!value) return true // 沒有輸入時，可以通過驗證
    if (/.+@.+\..+/.test(value)) return true // 有輸入時要驗證格式
    return "請輸入有效的電子郵件"
  },
]
// 電子郵件錯誤訊息
const validateEmail = () => {
  emailError.value = ""
  // 驗證每一個規則，如果有一個規則成立錯誤，則返回錯誤訊息
  for (const rule of emailRules) {
    const result = rule(email.value)
    if (result !== true) {
      emailError.value = result
      break
    }
  }
}
</script>

<style scoped>
@import "@/styles/settings.scss";
.card-color-bg {
  background: linear-gradient(101.87deg, #bbe8ef 2.37%, #ffffff 96.2%);
}
.dark-card-color-bg {
  background: linear-gradient(101.87deg, #4a7a80 2.37%, #2c2c2c 96.2%);
}

/* 空間過多時，需要指定到v-card的下一層改變套件的CSS，所以使用deep */
:deep(.v-card) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 4px 2px 0px hsla(0, 0%, 0%, 0.05);
}
/* 如果要按照設計稿需要讓input有border，我需要用這樣的方式讓它可以有邊框
如果使用vuetify的v-text-field 它會包含v-input__control(輸入框)和v-input__details(輸入驗證的錯誤訊息)
即便不用驗證，一樣會存在 */
:deep(input) {
  border: 1px solid var(--secondaryGray);
  border-radius: 4px;
  height: 20px;
}
/* 而當input被禁用時，也需要使用這樣的方式改它的css */
/* 取消套件它原有的input透明度和背景顏色 */
:deep(.v-field--disabled) {
  opacity: unset;
  background: var(--input);
}
/* 修改套件原有的padding 這些都是需要用開發人員工具去找到它在哪個位置，
名稱分別不同之外，放置的位置也不同，如沒有用這種方式，無法修改它預設默認
的CSS */
:deep(.v-input--density-default) {
  --v-input-control-height: 0px;
  --v-input-padding-top: 12px;
  margin: 12px 20px;
}

:deep(.v-field) {
  --v-field-padding-start: 14px;
  --v-field-padding-end: 14px;
}
:deep(.v-input--density-default .v-field--no-label) {
  --v-field-padding-bottom: 12px;
}
:deep(.v-input__details) {
  display: none;
}
:deep(.v-selection-control__input input) {
  opacity: 1;
}
:deep(.v-selection-control__input) {
  width: unset;
  height: unset;
}
.v-sheet {
  background: transparent;
}
.label {
  max-width: 120px;
}
.error-message {
  margin: 0 20px;
}
</style>
