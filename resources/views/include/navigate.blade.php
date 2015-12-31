<div class="ui visible inverted left thin vertical sidebar menu">
    <div class="item">
        <div class="header">{{ trans('common.sale') }}</div>
        <div class="menu">
            <a class="item">{{ trans('common.sale_invoice') }}</a>
            <a class="item">{{ trans('common.sale_total_revenue') }}</a>
        </div>
    </div>
    <div class="item">
        <div class="header">{{ trans('common.stock') }}</div>
        <div class="menu">
            <a class="item" href="#stock/product">{{ trans('common.stock_sale') }}</a>
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
</div>