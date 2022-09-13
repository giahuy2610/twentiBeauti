const admin = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/pages/Home.vue"),
    },
    {
        path: "/products",
        component: () => import("../components/pages/Home.vue"),
        children: [
            {
                path: "/:id",
            },
            {
                path: "",
            },
        ],
    },
    {
        path: "/profile",
        component: () => import("../components/pages/Home.vue"),
        children: [
            {
                path: "/?t=:id",
            },
            {
                path: "",
            },
        ],
    },
    {
        path: "/categories",
        component: () => import("../components/pages/Home.vue"),
        children: [
            {
                path: "/:id",
            },
            {
                path: "",
            },
        ],
    },
    {
        path: "/collections",
        component: () => import("../components/pages/Home.vue"),
        children: [
            {
                path: "/:id",
            },
            {
                path: "",
            },
        ],
    },
    {
        path: "/search",
        component: () => import("../components/pages/Home.vue"),
        name: "Search",
    },
    {
        path: "/brands",
        component: () => import("../components/pages/Home.vue"),
        name: "Brands",
    },
];

export default admin;
