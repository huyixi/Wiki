# Templates

## BreadCrumb

```vue
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" 
          v-for="(crumb, index) in breadcrumbs" 
          :key="index">
        <router-link :to="{ path: crumb.path }">{{ crumb.name }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      let pathArray = this.$route.path.split('/').filter(path => path);
      const breadcrumbs = [];
      let pathAccumulator = '';

      pathArray.forEach((path, index) => {
        pathAccumulator += `/${path}`;
        const route = this.$router.resolve(pathAccumulator).route;
        const breadcrumbName = route.meta.breadcrumbName || '未命名';
        breadcrumbs.push({
          path: pathAccumulator,
          name: breadcrumbName,
        });
      });

      return breadcrumbs;
    }
  }
};
</script>
```
