import { defineComponent } from 'vue'

export const dashboardCard = defineComponent({
  props: {
    card_name: String,
  },
  setup: (props, context) => {
    const card_name = props.card_name
    return () => (
      <el-card className="box-card" shadow="hover">
        <template>
          <div className="card-header">
            <span>{{ card_name }}</span>
          </div>
        </template>
      </el-card>
    )
  },
})
