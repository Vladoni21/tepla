<template>
    <section class="grid">
        <article style="max-width: 420px;">
            <Image />
        </article>
        <article style="max-width: 370px;">
            <Badge />
        </article>
        <article style="max-width: 550px;">
            <Account />
        </article>
        <section class="scope" style="min-width: 1370px;">
            <Table />
            <Creator />
        </section>
    </section>
</template>

<script>
import Image from '../components/templates/Profile/Image.vue';
import Badge from '../components/templates/Profile/Badge.vue';
import Account from '../components/templates/Profile/Account.vue';
import Creator from '../components/templates/Profile/Creator.vue';
import Table from '../components/templates/Profile/Table.vue';

export default {
    name: 'Profile', components: { Table, Creator, Account, Image, Badge },
};
</script>

<style scoped>

.grid {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 1540px;
    flex-flow: row wrap;

}

.grid > article {
    height: 525px;
    max-width: 36em;
    padding: 1em 3em 2em 3em;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4.2px;
    box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);
}

.grid .scope {
    margin-top: 3em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

@media only screen and (max-width: 540px) {
    .col-half {
        width: 100%;
        padding-right: 0;
    }
}

</style>