<template>
    <div class="become-teacher-profile">
        <i class="fad fa-chalkboard-teacher"></i>
        <p>شما هم میتوانید در مجموعه ویرولرن تدریس کنید !!</p>
        <btn-dang class="mx-auto d-block mt-4">همین الان مدرس می شوم</btn-dang>
    </div>
</template>

<script>
    import btnDang from '../../../components/buttons/danger/danger';
    export default {
        name: 'becomeTeacherProfile',
        components: {
            btnDang,
        }
    };
</script>
