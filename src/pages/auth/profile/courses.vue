<template>
    <div class="profile-courses">
        <span class="alt-dngpf">در حال حاضر امکان صدور مدرک وجود ندارد</span>
        <table class="w-100">
            <thead>
                <th class="table-radius">عنوان آموزش</th>
                <th>عملیات</th>
            </thead>

            <tbody>
                <tr>
                    <td><a href="#">آموزش جامع فریمورک لاراول</a></td>
                    <td><btn-prime>دریافت مدرک</btn-prime></td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
    import btnPrime from '../../../components/buttons/primary/primary';
    export default {
        name: 'ProfileCourses',
        components: {
            btnPrime,
        },
    };
</script>
