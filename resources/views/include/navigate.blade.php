<div class="ui visible inverted left vertical thin sidebar menu">
    <div class="item">
        <div class="header">{{ trans('common.sale') }}</div>
        <div class="menu">
            <a class="item" href="#invoice">
                {{ trans('common.invoice') }}
            </a>
            <a class="item" href="#sale">
                {{ trans('common.sale') }}
            </a>
            <a class="item">
                {{ trans('common.sale_total_revenue') }}
            </a>
            <a class="item" href="#sale/customer">
                {{ trans('common.sale_customer') }}
            </a>
        </div>
    </div>
    <div class="item">
        <div class="header">{{ trans('common.stock') }}</div>
        <div class="menu">
            <a class="item" href="#stock/product">{{ trans('common.stock_sale') }}</a>
            <a class="item" href="#stock/show-product">{{ trans('common.stock_show_product') }}</a>
            <a class="item">{{ trans('common.stock_internal') }}</a>
            <a class="item">{{ trans('common.stock_categoy') }}</a>
            <a class="item">{{ trans('common.stock_audit') }}</a>
        </div>
    </div>
    <div class="item">
        <div class="header">{{ trans('common.marketing') }}</div>
        <div class="menu">
            <a class="item">{{ trans('common.marketing_sale') }}</a>
            <a class="item">{{ trans('common.marketing_online') }}</a>
        </div>
    </div>
    <div class="item">
        <div class="header">{{ trans('common.account') }}</div>
        <div class="menu">
            <a class="item">{{ trans('common.account_in_out') }}</a>
            <a class="item">{{ trans('common.account_budget') }}</a>
            <a class="item">{{ trans('common.account_result') }}</a>
        </div>
    </div>
    <div class="item">
        <div class="header">{{ trans('common.hr') }}</div>
        <div class="menu">
            <a class="item">{{ trans('common.hr_diagram') }}</a>
            <a class="item">{{ trans('common.hr_employee') }}</a>
            <a class="item">{{ trans('common.hr_training') }}</a>
        </div>
    </div>
    <div class="item">
        <div class="header">{{ trans('common.test') }}</div>
        <div class="menu">
            <a class="item" href="#test/redux">{{ trans('common.test_redux') }}</a>
            <a class="item" href="#test/upload">{{ trans('common.test_upload_file') }}</a>
            <a class="item" href="#test/material-ui">{{ trans('common.test_material_ui') }}</a>
        </div>
    </div>
</div>