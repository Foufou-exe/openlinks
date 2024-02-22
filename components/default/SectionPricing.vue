<template>
  
    <!-- <Tabs default-value="account" class="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
   -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <!-- <Card class="border-2">
      <CardHeader>
        <CardTitle class="text-3xl">
          Free
        </CardTitle>
        <CardDescription>
          Get started for free in development.
        </CardDescription>
        <CardTitle class="text-4xl">
          -
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <ul class="text-normal text-gray-300 space-y-2">
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Hosted by Us. ❤️</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Up to 200 000 links.</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Directories</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Categories</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Up to 5 Teams</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Automatic Updates</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Auth0 SDK Github,Google</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Support Standard</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Community support</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full" type="button" variant="outline">
          Get Started
        </Button>
      </CardFooter>
    </Card>

    <Card class="border-2">
      <CardHeader>
        <CardTitle class="flex text-3xl items-center space-x-3">
          <span>Pro</span>
          <Badge class="text-sm">
            Most Popular
          </Badge>
        </CardTitle>
        <CardDescription>
          For teams of any size.
        </CardDescription>
        <CardTitle class="text-4xl">
          <span>10 $</span>
          <span class="text-lg text-gray-500"> /mo</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="mb-1">
          <ul class="text-normal text-gray-300 space-y-2">
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Hosted by Us. ❤️</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited links.</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Directories</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Categories</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Teams</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Free Plan functionality</span>
            </li>

            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Priority support ⚡</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter class="flex flex-col space-y-9">
        <p>
          <span class="text-gray-500 text-sm">30-days free trial, cancel anytime.</span>
        </p>
        <Button class="w-full" type="button" variant="outline">
          Start Free Trial
        </Button>
      </CardFooter>
    </Card>

    <Card class="border-2">
      <CardHeader>
        <CardTitle class="text-3xl">
          Custom
        </CardTitle>
        <CardDescription>
          Custom plan for your business.
        </CardDescription>
        <CardTitle class="text-4xl">
          -
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <ul class="text-normal text-gray-300 space-y-2">
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Hosted by Us. ❤️</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited links.</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Directories</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Unlimited Categories</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Programmes Insider</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Fully customizable instance.</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Integration SSO</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>All the premium features </span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
              <span>Priority Ultimed ⚡⚡</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>

        <Button class="w-full" type="button" variant="outline">
          Contact Us
        </Button>
      </CardFooter>
    </Card> -->
    <Card class="border-2 w-[350px]" v-for="plan in plans" :key="plan.name">
      <CardHeader>
        <CardTitle class="flex text-3xl items-center space-x-3">
          <span>{{ plan.name }}</span>
          <Badge class="text-sm" v-if="plan.labelMostPopular == true">
            Most Popular
          </Badge>
        </CardTitle>
        <CardDescription>
          {{ plan.description }}
        </CardDescription>
        <CardTitle class="text-4xl">
          {{ plan.price }}
        </CardTitle>
      </CardHeader>
      <CardContent v-for="feature in plan.features" :key="feature">
        <ul class="text-normal text-gray-300 space-y-2">
          <li class="flex items-center space-x-2">
            <Icon name="ph:circle-wavy-check-duotone" class="text-green-500 text-2xl" />
            <span>{{ feature }}</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter class="flex flex-col space-y-9 pt-10">
        <p v-if="plan.buttonLabelShow == true" class="pt-8">
          <span class="text-gray-500 text-sm">{{ plan.extra }}</span>
        </p>
        <Button class="w-full" type="button" variant="outline">
          {{ plan.buttonLabel }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const plans = ref([
  {
    name: "Free",
    description: "Get started for free in development.",
    price: "-",
    features: [
      "Hosted by Us. ❤️",
      "Up to 200 000 links.",
      "Unlimited Directories",
      "Unlimited Categories",
      "Up to 5 Teams",
      "Automatic Updates",
      "Auth0 SDK Github,Google",
      "Support Standard",
      "Community support",
    ],
    buttonLabel: "Get Started",
  },
  {
    name: "Pro",
    description: "For teams of any size.",
    price: "0.99 $",
    labelMostPopular: true,
    features: [
      "Hosted by Us. ❤️",
      "Unlimited links.",
      "Unlimited Directories",
      "Unlimited Categories",
      "Unlimited Teams",
      "Free Plan functionality",
      "Priority support ⚡",
    ],
    buttonLabel: "Start Free Trial",
    buttonLabelShow: true,
    extra: "30-days free trial, cancel anytime.",
  },
  {
    name: "Custom",
    description: "Custom plan for your business.",
    price: "30 $",
    features: [
      "Hosted by Us. ❤️",
      "Pro Plan functionality",
      "Programmes Insider",
      "Fully customizable instance.",
      "Integration SSO",
      "All the premium features",
      "Priority Ultimed ⚡⚡",
      "Access to the API",
    ],
    hrefButton: "/contact",
    buttonLabel: "Contact Us",
  }
]);


</script>

