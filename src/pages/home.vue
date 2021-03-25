<template>
    <div class="container-fluid-lg">
        <!-- Header -->
        <Header :ishome="true" />
        <!-- End Header -->

        <!-- Main -->
        <main class="main">
            <!-- Container -->
            <div class="container-fluid-lg">

                <!-- Categories -->
                <Categories />
                <!--End Categories  -->

                <!-- Services Box -->
                <services-box />
                <!-- End Services Box -->

                <!-- Slider -->
                <!-- <slider class="mb-5" /> -->
                <!-- End Slider -->

                <!-- New Cources -->
                <new-courses />
                <!-- End New Cources -->

                <!-- Best Teacher -->
                <!-- <best-teacher /> -->
                <!-- End Best Teacher -->

                <!-- Become a teacher -->
                <becomeTeacher />
                <!-- End Become a teacher -->

                <!-- Posts -->
                <posts />
                <!-- End Posts -->

                <!-- Newsletter -->
                <newsletter />
                <!-- End Newsletter -->

            </div>
            <!-- End Container -->
        </main>
        <!-- End Main -->

        <!-- Footer -->
        <Footer />
        <!-- End Footer -->
    </div>
</template>

<script>

    // Import Sections
    import Header from "../components/sections/header";
    import ServicesBox from "../components/sections/services-box";
    import newCourses from "../components/sections/new-cources";
    // import bestTeacher from "../components/sections/best-teacher";
    import Posts from "../components/sections/posts";
    import Footer from "../components/sections/footer";
    import Categories from "../components/sections/categories";
    // import slider from "../components/slider/slider.vue";
    import Newsletter from "../components/newsletter.vue";
    import becomeTeacher from "../components/sections/become-teacher";

    export default {
        name: "Home",
        components: {
            Header,
            ServicesBox,
            newCourses,
            // bestTeacher,
            Posts,
            Footer,
            // slider,
            Newsletter,
            Categories,
            becomeTeacher,
        },
    };
</script>
