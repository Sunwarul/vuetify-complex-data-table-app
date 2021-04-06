<template>
<!-- You must enclose your entire app with <v-app></v-app> tag, when using VUETIFY! -->
    <v-app>
        <v-container>
            <h1 style="font-family: monospace;">Data Table Example App</h1>
            <p>Created using VueJS and Vuetify. Back-end in Laravel</p>
            <v-card>
                <!-- Card Title -->
                <v-card-title>
                    All Users
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>

                <!-- Data Table -->
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :search="search"
                    :items-per-page="5"
                ></v-data-table>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            headers: [
                { text: "User Id", value: "id" },
                { text: "User Name", value: "name" },
                { text: "User Email", value: "email" },
                { text: "Created At", value: "created_at" }
            ],
            search: ""
        };
    },
    // Get data from back-end API using axios/fetch when this component get mounted.
    mounted() {
        fetch("http://vuetify.test/api/users")
            .then(res => res.json())
            .then(users => (this.users = users));
    }
};
</script>
