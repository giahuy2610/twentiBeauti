const admin = [
    {
        path: "/admin/test",
        name: "Hsome",
        component: () => import("../components/layouts/admin.vue"),
    },
    {
        path: "/admin/home",
        name: "Admin",
        component: () => import("../components/layouts/test.vue"),
    },
];

export default admin;
