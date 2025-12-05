import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about/company-profile", "routes/about.company-profile.tsx"),
  route("about/vision-mission", "routes/about.vision-mission.tsx"),
  route("about/teams", "routes/about.teams.tsx"),
  route("services", "routes/services.tsx"),
  route("services/product-development", "routes/services.product-development.tsx"),
  route("services/it-consulting", "routes/services.it-consulting.tsx"),
  route("services/marketing-solution", "routes/services.marketing-solution.tsx"),
  route("projects", "routes/projects.tsx"),
  route("careers", "routes/careers.tsx"),
  route("careers/apply", "routes/careers.apply.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
