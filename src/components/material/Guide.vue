<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="green" large rounded outlined dark v-on="on">Guide <v-icon right>{{ help }}</v-icon></v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="blue-grey">
          <v-toolbar-title>Guide 🎫</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn dark icon text  @click="dialog = false"><v-icon>{{ close }}</v-icon></v-btn>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Manual ✔</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Registering Students</v-list-item-title>
              <v-list-item-subtitle>Welcome to E-Management Dapp 😊😎</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Notifications 🎁</v-list-item-title>
              <v-list-item-subtitle>All students, guardians and user can subscribe so as to get notified when their is new like. eg new results, when gp is ready e.t.c</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Login🎟🧶</v-list-item-title>
              <v-list-item-subtitle>Currently, no sophisticated logiin system has been implemented. Thus, for users to access their Data.</v-list-item-subtitle>
              <v-list-item-subtitle>They must use their unique id which something like this <span>19-01-0001</span></v-list-item-subtitle>
              <v-list-item-subtitle>That is "19" is the year eg 20<span class="red white--text">19</span> and <span class="red white--text">01</span> is the faculty identity. Check the faculty id scheme below for better understanding. lastly your matriculation number <span class="red white--text">0001</span>✔✌</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list shaped>
            <v-subheader class="title primary--text">Faculty Id Naming Scheme</v-subheader>
            <v-list-item-group color="blue-grey">
                <v-list-item
                 v-for="(item, i) in items"
                 :key="i"
                >
                    <v-list-item-content>
                        <v-list-item-title class="black--text">{{ item.text }}</v-list-item-title>
                        <v-list-item-subtitle>
                            {{ item.subtext }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mdiClose } from "@mdi/js";
import { mdiHelpCircle } from "@mdi/js";

export default {
    data () {
        return {
            dialog: false,
            item: 1,
            close: mdiClose,
            help: mdiHelpCircle,
            items: [
                { subtext: "id=01", text: "Faculty of Education (ED)" },
                { subtext: "id=02", text: "Faclty of Arts" },
                { subtext: "id=03", text: "Faculty of Natural Science (NS)" },
                { subtext: "id=04", text: "Faculty of Medical Sciences (MD)" },
                { subtext: "id=05", text: "Faculty of Law" },
                // { subtext: "", text: "" },
                // { subtext: "", text: "" },
            ]
        }
    },
}
</script>