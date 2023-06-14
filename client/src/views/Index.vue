<template>
    <main id="app">
        <!-- <Plug v-if="isPlugVisible" />
        <section v-if="!isPlugVisible" class="content">
            <aside>
                <Sidebar />
            </aside>
            <section style="width: 70%">
                <router-view />
            </section>
        </section>
        <Footer v-if="!isPlugVisible" /> -->
        <router-view />
    </main>
</template>

<script>

import expert from '../components/img/expert.jpg';
import Main from './Main.vue';
import Home from './Home.vue';
import Plug from './Plug.vue';
import Selector from '../components/blocks/puzzle/selector.vue';
import Profile from './Profile.vue';
import Footer from '../components/bars/Footer.vue';
import Course from '../views/Course.vue';
import Sidebar from '../components/bars/Sidebar.vue';
import Display from './Display.vue';
import Context from './Context.vue';
import Step from '../components/templates/Context/Step.vue';


export default {
    name: 'app', components: {
        Context, Course, Footer, Profile, Selector, Plug, Sidebar, Main, Home, Display, Step,
    }, data() {
        return {
            is: expert, isPlugVisible: true, courses: [{
                id: '1',
                title: 'UX Design Foundations',
                description: 'Learn the basics of UX design & key foundational concepts with this online intro course. With 25 lessons, you’ll learn principles, elements, terminology, & more!',
                level: 'Beginner',
                time: '6 hours',
            }, {
                id: '2',
                title: 'Design Terminology',
                description: 'This course is a perfect introduction to design terminology for all professional backgrounds. Learn the most commonly used UI and UX design, graphic design, and marketing terms to ensure smooth collaboration with other designers, developers, and stakeholders.',
                level: 'Beginner',
                time: '3 hours',
            }, {
                id: '3',
                title: 'Figma',
                description: 'Test your knowledge of how Figma helps teams collaboratively brainstorm, build, test, and share designs, and see how you stack up against designers worldwide.',
                level: 'Advanced',
                time: '12 hours',
            }, {
                id: '4',
                title: 'UX Design Foundations',
                description: 'Learn the basics of UX design & key foundational concepts with this online intro course. With 25 lessons, you’ll learn principles, elements, terminology, & more!',
                level: 'Intermediate',
                time: '6 hours',
            }, {
                id: '5',
                title: 'CSS for Designers',
                description: 'Learn the fundamentals of CSS to communicate your designs with developers or create your own websites.',
                level: 'Beginner',
                time: '4 hours',
            }, {
                id: '6',
                title: 'Design Composition',
                description: 'Unleash your creativity and elevate your design skills with our composition course.',
                level: 'Discover',
                time: '2 hours',
            }],
        };
    }, mounted() {
        this.showPreloader();
    }, methods: {
        showPreloader() {
            setTimeout(() => {
                this.isPlugVisible = false;
            }, 2000);
        },
    },
};
</script>

<style>
.content {
    display: flex;
    justify-content: center;
    height: 90%;
    width: 100%;
}
</style>