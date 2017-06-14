<template>
    <v-card>
        <v-card-text>
            <v-btn icon @click.native="removeTask">
                <v-icon>delete</v-icon>
            </v-btn>
            {{ text }}
        </v-card-text>
    </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: [
        'text',
        'index',
    ],
    methods: {
        ...mapMutations([
            'removeItem',
        ]),
        removeTask() {
            this.removeItem(this.index);
        },
    },
};
</script>

<style scoped>

</style>
